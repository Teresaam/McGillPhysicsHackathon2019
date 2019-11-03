import numpy as np

d = 3
l = 15

def find_neighbours(p):
  neighbours = []
  def neighbour_helper(p,index):
    new_p = np.copy(p)
    if new_p[index] < l-1:
      new_p[index] += 1
      neighbours.append(np.copy(new_p))
    if index < d-1:
      neighbour_helper(new_p,index+1)

    new_p = np.copy(p)
    if new_p[index] > 0:
      new_p[index] -= 1
      neighbours.append(np.copy(new_p))
    if index < d-1:
      neighbour_helper(new_p,index+1)

    new_p = np.copy(p)
    if index < d-1:
      neighbour_helper(new_p,index+1)

  idx = 0
  neighbour_helper(p,idx)

  return neighbours


#Takes in a given site i,j and returns the index of the state vector
def get_index(x):
  k=0
  for i in range(x.size):
    k+=x[i]*l**i
  return int(k)

def get_lattice_point(i):
  x = np.zeros(d)
  m = i
  for j in range(d):
    x[d-1-j] = m // (l**(d-1-j))
    m = m % l**(d-1-j)
  return x


def construct_hamiltonian(k):
  rand_array = k*(np.random.rand((l**d))-1/2*np.ones(l**d));
  h1 = np.diag(rand_array)
  h2 = np.zeros((l**d,l**d))

  for i in range(l**d):
    lattice_point = get_lattice_point(i)  
    neigh = find_neighbours(lattice_point)
    for entry in neigh:
      entry_idx = get_index(entry)
      h2[i,entry_idx] = 1

  return np.subtract(h1,h2)

def get_eigenstate(ham):
  values, vectors = np.linalg.eig(ham)
  modulus = np.square(np.absolute(vectors))
  res = np.where(values == np.amax(values))
  eig = modulus[:,res]
  return eig

for i in range(30):
    k = i + 1
    h = construct_hamiltonian(k)
    eigenstate = get_eigenstate(h)
    save_str = "eigenvectors/eigen_k=" + str(k) + ",d=" + str(d)
    np.save(save_str,eigenstate)

