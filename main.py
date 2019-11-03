from aiohttp import web
import socketio
import numpy as np

k = 0
d = 2

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
@sio.on('message')
async def print_message(sid, message):
    k = message
    messageToJS = load_eigenvector()

    # When we receive a new event of type
    # 'message' through a socket.io connection
    # we print the socket ID and the message
    print("Socket ID: " , sid)
    print(message) #message is the value sent from the HTML
    await sio.emit('message', messageToJS) 
    # notice it has to be of type 'message' and then pass the 
    # value to send to html doc

# We bind our aiohttp endpoint to our app
# router
app.router.add_get('/', index)
app.router.add_get('/test.js', test)


# We kick off our server
if __name__ == '__main__':
    web.run_app(app)

def load_eigenvector():
    vec_path = "eigenvectors/eigen_k=" + str(k) + "d=" + str(d)
    eigenvector = np.load(vec_path)
    return eigenvector

