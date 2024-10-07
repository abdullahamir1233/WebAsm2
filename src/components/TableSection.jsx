import React from 'react';

const TableSection = () => {
    return (
        <section className="section-top-border py-12">
            <h3 className="text-3xl font-semibold mb-6">Table</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border-b">#</th>
                            <th className="py-3 px-4 border-b">Countries</th>
                            <th className="py-3 px-4 border-b">Visits</th>
                            <th className="py-3 px-4 border-b">Percentages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4 border-b">01</td>
                            <td className="py-3 px-4 border-b">Canada</td>
                            <td className="py-3 px-4 border-b">645032</td>
                            <td className="py-3 px-4 border-b">
                                <div className="relative pt-1">
                                    <div className="flex">
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 border-b">02</td>
                            <td className="py-3 px-4 border-b">USA</td>
                            <td className="py-3 px-4 border-b">750032</td>
                            <td className="py-3 px-4 border-b">
                                <div className="relative pt-1">
                                    <div className="flex">
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 border-b">03</td>
                            <td className="py-3 px-4 border-b">UK</td>
                            <td className="py-3 px-4 border-b">500032</td>
                            <td className="py-3 px-4 border-b">
                                <div className="relative pt-1">
                                    <div className="flex">
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TableSection;
