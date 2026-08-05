import { CheckCircleIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      {/* Modal */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700">
            Choose a Platform
          </h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Platform List */}
        <div className="p-4 flex flex-col gap-2">
          {PLATFORMS.map((p) => {
            const isConnected = connectedIds.includes(p.id);
            const isConnecting = connecting === p.id;

            return (
              <button
                key={p.id}
                onClick={() => !isConnected && onConnect(p.id)}
                disabled={isConnected || isConnecting}
                className={`flex  items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${isConnected?"border-red-200 bg-red-50 cursor-default ":"border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 cursor-pointer"} ${isConnecting && "opacity-60"} `}        
              >
                {/* Platform Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <p.icon
                    className={`w-7 h-7 ${
                      isConnected ? "text-red-600" : "text-slate-600"
                    }`}
                  />
                </div>

                {/* Platform Info */}
                <div className="flex-1 text-left">
                  <h4
                    className={`text-base font-medium ${
                      isConnected ? "text-red-600" : "text-slate-800"
                    }`}
                  >
                    {p.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {isConnected ? "Already connected" : p.description}
                  </p>
                </div>

                {/* Status Icon */}
                {isConnected ? (
                  <CheckCircleIcon className="w-5 h-5 text-red-600 shrink-0" />
                ) : isConnecting ? (
                  <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0" />
                ) : (
                  <ExternalLinkIcon className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;

// import { CheckCircleIcon, ExternalLinkIcon, XIcon } from "lucide-react";
// import { PLATFORMS } from "../assets/assets";

// interface PlatformPickerModalProps {
//   connectedIds: string[];
//   connecting: string | null;
//   onClose: () => void;
//   onConnect: (platformId: string) => void;
// }

// const PlatformPickerModal = ({
//   connectedIds,
//   connecting,
//   onClose,
//   onConnect,
// }: PlatformPickerModalProps) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 ">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}

//         <h3 className=" text-slate-700">Choose a platform</h3>
//         <button
//           onClick={onClose}
//           className=" p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
//         >
//           <XIcon className=" size-4" />
//         </button>
//       </div>
//       {/* Platform list */}

//       <div className=" p-6 flex bg-amber-300 flex-col gap-2">
//         {PLATFORMS.map((p) => {
//           const isConnected = connectedIds.includes(p.id);
//           const isConnecting = connecting === p.id;

//           return (
//             <button
//               key={p.id}
//               className="flex items-center gap-4 w-full px-4 py-4 rounded-xl hover:bg-slate-50 transition"
//             >
//               {/* icon */}
//               <div className="p-2 ">
//                 <p.icon
//                   className={`size-4 ${
//                     isConnected ? "text-red-600" : "text-slate-500"
//                   } `}
//                 />
//               </div>
//               {/* label */}
//               <div className="flex-1 min-w-0">
//                 <div
//                   className={`text-sm ${isConnected ? "text-red-700" : "text-slate-800"}`}
//                 >
//                   {p.name}
//                 </div>
//                 <div className="text-xs text-slate-500 truncate">
//                   {isConnected ? "Already Connected" : p.description}
//                 </div>
//               </div>
//               {/* status */}

//               {isConnected && (
//                 <CheckCircleIcon className=" size-4 text-red-600 shrink-0" />
//               )}
//               {isConnecting && (
//                 <div className="size-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0 " />
//               )}
//               {!isConnected && !isConnecting && (
//                 <ExternalLinkIcon className=" size-3.5 text-slate-400 shrink-0" />
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PlatformPickerModal;
