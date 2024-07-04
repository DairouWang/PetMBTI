type ProgressProps = {
    current: number;
    total: number;
};

export default function Progress({ current, total }: ProgressProps) {
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(current / total) * 100}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Question {current} of {total}</p>
        </>
    );
}