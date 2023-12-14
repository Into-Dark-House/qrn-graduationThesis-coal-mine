import * as THREE from 'three'

var GeometryHelper = function () {}

GeometryHelper.prototype = {
  constructor: GeometryHelper,

  // Computes vertex normals on THREE.js buffer geometry, even when the mesh
  // uses triangle strip connectivity.
  computeVertexNormals: function (bufferGeometry) {
    if (bufferGeometry.drawMode === THREE.TrianglesDrawMode) {
      bufferGeometry.computeVertexNormals()
    } else if (bufferGeometry.drawMode === THREE.TriangleStripDrawMode) {
      if (bufferGeometry.attributes.position === undefined) {
        return
      }
      const inPositions = bufferGeometry.attributes.position.array
      if (bufferGeometry.attributes.normal === undefined) {
        bufferGeometry.addAttribute(
          'normal',
          new THREE.BufferAttribute(new Float32Array(inPositions.length),
            3))
      } else {
        // Reset existing normals to zero.
        const array = bufferGeometry.attributes.normal.array
        for (let i = 0; i < array.length; ++i) {
          array[i] = 0
        }
      }
      const outNormals = bufferGeometry.attributes.normal.array

      const pos0 = new THREE.Vector3()
      const pos1 = new THREE.Vector3()
      const pos2 = new THREE.Vector3()
      const posDif0 = new THREE.Vector3()
      const posDif1 = new THREE.Vector3()
      const localNormal = new THREE.Vector3()

      const stripIndices = bufferGeometry.index.array
      for (let i = 2; i < stripIndices.length; ++i) {
        const index0 = stripIndices[i - 2] * 3
        let index1 = stripIndices[i - 1] * 3
        let index2 = stripIndices[i] * 3
        // Skip degenerate triangles.
        if (index0 === index1 || index0 === index2 || index1 === index2) {
          continue
        }
        if ((i & 1) !== 0) {
          // Swap index 1 and 0 on odd indexed triangles.
          const tmpIndex = index1
          index1 = index2
          index2 = tmpIndex
        }

        // Get position values.
        pos0.fromArray(inPositions, index0)
        pos1.fromArray(inPositions, index1)
        pos2.fromArray(inPositions, index2)

        // Position differences
        posDif0.subVectors(pos2, pos0)
        posDif1.subVectors(pos1, pos0)

        // Weighted normal.
        localNormal.crossVectors(posDif1, posDif0)

        // Update normals on vertices
        outNormals[index0] += localNormal.x
        outNormals[index0 + 1] += localNormal.y
        outNormals[index0 + 2] += localNormal.z

        outNormals[index1] += localNormal.x
        outNormals[index1 + 1] += localNormal.y
        outNormals[index1 + 2] += localNormal.z

        outNormals[index2] += localNormal.x
        outNormals[index2 + 1] += localNormal.y
        outNormals[index2 + 2] += localNormal.z
      }
      bufferGeometry.normalizeNormals()
      bufferGeometry.attributes.normal.needsUpdate = true
    }
  }
}
export {
  GeometryHelper
}
