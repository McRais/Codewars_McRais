function symmetricPoint(p, q) {
 let [distX, distY] = [q[0]-p[0],q[1]-p[1]]
 let [x,y] = [q[0] + distX, q[1] + distY] 
 if (p[0] > q[0]){distX = p[0]-q[0]; x = q[0] - distX}
 if (p[1] > q[1]){distY = p[1]-q[1]; y = q[1] - distY}
 return [x,y]
}