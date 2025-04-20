import React from 'react';

const SystemRequirements = ({ platforms }) => {
  // Parse requirements text
  const parseRequirements = (reqText) => {
    if (!reqText) return {};
    
    const extract = (pattern) => {
      const match = reqText.match(pattern);
      return match ? match[1].trim() : 'Not specified';
    };

    return {
      os: extract(/OS:?\s*([^:\n]+)/i),
      processor: extract(/Processor:?\s*([^:\n]+)/i) || extract(/CPU:?\s*([^:\n]+)/i),
      memory: extract(/Memory:?\s*([^:\n]+)/i) || extract(/RAM:?\s*([^:\n]+)/i),
      graphics: extract(/Graphics:?\s*([^:\n]+)/i) || extract(/GPU:?\s*([^:\n]+)/i) || extract(/Video Card:?\s*([^:\n]+)/i),
      storage: extract(/Storage:?\s*([^:\n]+)/i) || extract(/Hard Drive:?\s*([^:\n]+)/i) || extract(/Disk space:?\s*([^:\n]+)/i),
      directx: extract(/DirectX:?\s*([^:\n]+)/i),

    };
  };

  const components = [
    { name: 'Operating System', key: 'os'},
    { name: 'Processor', key: 'processor' },
    { name: 'Memory', key: 'memory' },
    { name: 'Graphics', key: 'graphics' },
    { name: 'Storage', key: 'storage' },
    { name: 'DirectX', key: 'directx' },
 
  ];

  const pcPlatform = platforms?.find(p => p.platform.name === "PC");
  
  if (!pcPlatform || (!pcPlatform.requirements?.minimum && !pcPlatform.requirements?.recommended)) {
    return null;
  }

  const minReqs = parseRequirements(pcPlatform.requirements.minimum);
  const recReqs = parseRequirements(pcPlatform.requirements.recommended);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">PC System Requirements</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-700 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Component</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Minimum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Recommended</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {components.map(({ name, key}) => (
              <tr key={key} className="hover:bg-gray-600 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">

                  {name}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">
                  {minReqs[key]}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">
                  {recReqs[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>* Requirements may vary depending on the game version and settings.</p>
      </div>
    </div>
  );
};

export default SystemRequirements; 