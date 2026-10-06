from flask import Flask
app = Flask(__name__)

@app.route("/<int:count>")
def increase(count):
    file_update(count)
    with open("counter.txt", "r") as file:
        data = file.read()
    return data

@app.route("/")
def data():
    with open("counter.txt", "r") as file:
        data = file.read()
    return data

@app.route("/set/<int:final>")
def setval(final):
    with open("counter.txt", "r+") as file:
        updatedcount = final
        file.seek(0)
        file.write(str(updatedcount))
        file.truncate()
    return str(final)

def file_update(count):
    with open("counter.txt", "r+") as file:
        oldcount = file.read()
        updatedcount = str(int(oldcount) + count)
        file.seek(0)
        file.write(updatedcount)
        file.truncate()

if __name__ == "__main__":
    app.run(port=7780, host='0.0.0.0')