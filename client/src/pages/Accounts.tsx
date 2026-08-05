import { useEffect, useState } from "react";
import AccountList from "../components/AccountList";
import { dummyAccountsData, PLATFORMS } from "../assets/assets";
import { PlusIcon } from "lucide-react";
import PlatformPickerModal from "../components/PlatformPickerModal";
// import { platform } from "os"

const Accounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);

  const fetchAccounts = async (
    isSync = false,
    platform?: string | null,
    successMsg?: string,
  ) => {
    setAccounts(dummyAccountsData);
    console.log(" logging...", isSync, platform, successMsg);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleConnect = async (platformID: string) => {
    setConnecting(platformID);
    setTimeout(() => {
      setConnecting(null);
      setAccounts((prev) => [...prev, dummyAccountsData[0]]);
      setShowPlatformPicker(false);
    }, 1000);
  };

  const handleDisconnect = async (accountId: string) => {
    console.log("Clicked ID:", accountId);

    setAccounts((prev) => {
      console.log("Before:", prev);

      const updated = prev.filter((a) => a._id !== accountId);

      console.log("After:", updated);

      return updated;
    });
  };

  const connectedIds = accounts.map((a) => a.platform);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header  */}

      <div className="flex flex-row sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div>
          <h2 className="text-xl text-slate-900">Connected Accounts</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {accounts.length} of {PLATFORMS.length} platforms created
          </p>
        </div>
        <button
          onClick={() => setShowPlatformPicker(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center "
        >
          <PlusIcon className="size-4" /> Connect Account
        </button>
      </div>

      {/* Platform picker modal */}

      {showPlatformPicker && (
        <PlatformPickerModal
          connectedIds={connectedIds}
          connecting={connecting}
          onClose={() => setShowPlatformPicker(false)}
          onConnect={handleConnect}
        />
      )}

      {/* Connected accounts list */}

      {/* connected accounts list */}

      <AccountList accounts={accounts} onDisconnect={handleDisconnect} />
    </div>
  );
};

export default Accounts;
