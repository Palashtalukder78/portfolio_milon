export default function AddProjectPage() {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-200 shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-3">
          নতুন প্রজেক্ট যোগ করুন
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {/* প্রজেক্টের শিরোনাম */}
          <label className="form-control">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              প্রজেক্টের শিরোনাম
            </span>
            <input
              type="text"
              placeholder="প্রজেক্টের শিরোনাম লিখুন"
              className="input input-bordered input-sm w-full"
            />
          </label>

          {/* প্রজেক্ট মালিক */}
          <label className="form-control">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              প্রজেক্ট মালিক
            </span>
            <input
              type="text"
              placeholder="প্রজেক্ট মালিকের নাম লিখুন"
              className="input input-bordered input-sm w-full"
            />
          </label>

          {/* প্রজেক্টের ঠিকানা */}
          <label className="form-control">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              প্রজেক্টের ঠিকানা
            </span>
            <input
              type="text"
              placeholder="প্রজেক্টের ঠিকানা লিখুন"
              className="input input-bordered input-sm w-full"
            />
          </label>

          {/* প্রজেক্টের সময়কাল */}
          <label className="form-control">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              প্রজেক্টের সময়কাল
            </span>
            <input
              type="text"
              placeholder="প্রজেক্টের সময়কাল লিখুন"
              className="input input-bordered input-sm w-full"
            />
          </label>

          {/* প্রজেক্টের বিস্তারিত */}
          <label className="form-control sm:col-span-2">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              প্রজেক্টের বিস্তারিত
            </span>
            <textarea
              placeholder="প্রজেক্টের বিস্তারিত লিখুন"
              className="textarea textarea-bordered w-full"
              rows="2"
            />
          </label>

          {/* উপার্জন */}
          <label className="form-control">
            <span className="label-text block mb-2 text-gray-600 font-medium">
              উপার্জন
            </span>
            <input
              type="text"
              placeholder="উপার্জনের পরিমাণ লিখুন"
              className="input input-bordered input-sm w-full"
            />
          </label>

          {/* ফাইল আপলোড */}
          <div className="form-control">
            <label className="label-text block mb-2 text-gray-600 font-medium">
              ফাইল আপলোড করুন
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm"
            />
          </div>

          {/* সাবমিট বোতাম */}
          <div className="sm:col-span-2 text-center mt-4">
            <button className="btn btn-sm btn-primary w-full sm:w-2/2">
              প্রজেক্ট যোগ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
