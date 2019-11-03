from aiohttp import web
import socketio
import numpy as np

def load_eigenvector(k,d):
    vec_path = "eigenvectors/eigen_k=" + str(k) + ",d=" + str(d) + ".npy"
    eigenvector_np = np.load(vec_path)
    eigenvector_str = ""
    for x in np.nditer(eigenvector_np):
        eigenvector_str += str(x)  + " "

    # print()
    # print(eigenvector_str)
    return eigenvector_str

# creates a new Async Socket IO Server
sio = socketio.AsyncServer(cors_allowed_origins="*")
# Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
# instance
sio.attach(app)

# we can define aiohttp endpoints just as we normally
# would with no change
async def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

async def test(request):
    with open('test.js') as f:
        return web.Response(text=f.read(), content_type='text/js')

# If we wanted to create a new websocket endpoint,
# use this decorator, passing in the name of the
# event we wish to listen out for
@sio.on('hi')
async def print_message(sid, message, d_JS):
    k = message
    d = d_JS
    # print(k)
    # print(d)
    messageToJS = load_eigenvector(k,d)
    # print()
    # print(messageToJS)

    # print()
    # print(messageToJS)
    # When we receive a new event of type
    # 'message' through a socket.io connection
    # we print the socket ID and the message
    # print("Socket ID: " , sid)
    # print(message) #message is the value sent from the HTML
    await sio.emit('message', messageToJS) 
    # notice it has to be of type 'message' and then pass the 
    # value to send to html doc 
# @sio.on('d')
# async def get_d_val(sid, message):
    # d = message
# We bind our aiohttp endpoint to our app
# router
app.router.add_get('/', index)
app.router.add_get('/test.js', test)


# We kick off our server
if __name__ == '__main__':
    web.run_app(app)


