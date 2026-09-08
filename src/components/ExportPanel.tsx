import React, { useState } from 'react';
import { exportPointCloudToPLY, exportPointCloudToOBJ, downloadFile } from '../utils/exportUtils';

interface ExportPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ isOpen, onClose }) => {
  const [exporting, setExporting] = useState(false);
  const [stereoMode, setStereoMode] = useState<'off' | 'side-by-side' | 'anaglyph'>('off');

  const handleExportPointCloud = async (format: 'ply' | 'obj') => {
    setExporting(true);
    
    try {
      // Generate sample point cloud data (in real implementation, collect from render)
      const count = 10000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const normals = new Float32Array(count * 3);
      
      // Generate fractal surface points (simplified)
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 1.0 + Math.random() * 0.5;
        
        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);
        
        colors[i3] = 0.5 + Math.random() * 0.5;
        colors[i3 + 1] = 0.3 + Math.random() * 0.4;
        colors[i3 + 2] = 0.7 + Math.random() * 0.3;
        
        normals[i3] = Math.sin(phi) * Math.cos(theta);
        normals[i3 + 1] = Math.sin(phi) * Math.sin(theta);
        normals[i3 + 2] = Math.cos(phi);
      }
      
      const pointCloudData = { positions, colors, normals, count };
      
      let content: string;
      let filename: string;
      let mimeType: string;
      
      if (format === 'ply') {
        content = exportPointCloudToPLY(pointCloudData);
        filename = 'fractal_pointcloud.ply';
        mimeType = 'model/ply';
      } else {
        content = exportPointCloudToOBJ(pointCloudData);
        filename = 'fractal_pointcloud.obj';
        mimeType = 'model/obj';
      }
      
      downloadFile(content, filename, mimeType);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setExporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-lg p-6 max-w-2xl w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-amber-400">Export & Stereo Rendering</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Point Cloud Export */}
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Point Cloud Export</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Export fractal surface as point cloud with positions, colors, and normals
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleExportPointCloud('ply')}
                disabled={exporting}
                className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:bg-neutral-700 text-white rounded-lg transition-colors font-medium"
              >
                Export PLY
              </button>
              <button
                onClick={() => handleExportPointCloud('obj')}
                disabled={exporting}
                className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:bg-neutral-700 text-white rounded-lg transition-colors font-medium"
              >
                Export OBJ
              </button>
            </div>
          </div>

          {/* Stereo Rendering */}
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Stereo Rendering</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Enable stereoscopic 3D rendering for VR headsets or 3D displays
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="stereo"
                  value="off"
                  checked={stereoMode === 'off'}
                  onChange={(e) => setStereoMode(e.target.value as any)}
                  className="w-4 h-4 text-amber-500"
                />
                <span className="text-neutral-300">Off (Mono)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="stereo"
                  value="side-by-side"
                  checked={stereoMode === 'side-by-side'}
                  onChange={(e) => setStereoMode(e.target.value as any)}
                  className="w-4 h-4 text-amber-500"
                />
                <span className="text-neutral-300">Side-by-Side (VR)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="stereo"
                  value="anaglyph"
                  checked={stereoMode === 'anaglyph'}
                  onChange={(e) => setStereoMode(e.target.value as any)}
                  className="w-4 h-4 text-amber-500"
                />
                <span className="text-neutral-300">Anaglyph (Red/Cyan glasses)</span>
              </label>
            </div>
          </div>

          {/* Info */}
          <div className="bg-neutral-800 rounded-lg p-4 text-sm text-neutral-400">
            <p className="mb-2"><strong className="text-amber-300">Point Cloud:</strong> Exports surface points with colors and normals</p>
            <p className="mb-2"><strong className="text-amber-300">PLY Format:</strong> Widely supported in 3D software (Blender, MeshLab)</p>
            <p><strong className="text-amber-300">Stereo:</strong> Side-by-side for VR, Anaglyph for red/cyan glasses</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
