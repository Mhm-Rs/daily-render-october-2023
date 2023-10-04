from tkinter import *
from tkinter.colorchooser import askcolor
from tkinter import ttk
import tkinter as tk
from PIL import Image,ImageDraw

root = Tk()
root.title("Paint")
root.geometry("1050x570+150+50")
root.configure(bg="#f2f3f5")
root.resizable(False,False)

#icon
image_icon = PhotoImage(file="icon.png")
root.iconphoto(False,image_icon)

color_box=PhotoImage(file="barre.png")
Label(root, image=color_box, bg="#f2f3f5").place(x=10,y=20)

colors=Canvas(root, bg="#ffffff",width=37,height=310,bd=0)
colors.place(x=20, y=60)



current_x = 0
current_y = 0
color = "black"

def addLine(work):
   global current_x, current_y

   canvas.create_line((current_x,current_y,work.x,work.y),width=get_current_value(),fill=color,capstyle=ROUND,smooth=True)
   current_x, current_y = work.x, work.y

def locate_xy(work):
   global current_x, current_y
   current_x, current_y = work.x, work.y

def show_color(new_color):
    global color
    color = new_color

def new_canvas():
   canvas.delete("all")
   create_and_display_color()

def create_and_display_color():
    colors_nouns = ["black", "gray", "brown4", "red", "orange", "yellow", "green", "blue", "pink", "purple"]

    for index, color in enumerate(colors_nouns):
      id = colors.create_rectangle((10,10 + 30*index,30,30 + 30*index),fill=color)
      colors.tag_bind(id, "<Button-1>", lambda x,c=color: show_color(c))

def saveImage():
   canvas.postscript(file="canvas_image.ps",colormode="color")
   img = Image.open("canvas_image.ps")
   img.save("canvas_image.png","png")


create_and_display_color()

eraser = PhotoImage(file="eraser.png")
Button(root,image=eraser,bg="#f2f3f5",command=new_canvas).place(x=20,y=400)

save = PhotoImage(file="save.png")
Button(root,image=save,bg='#f2f3f5',command=saveImage).place(x=200,y=515)

canvas=Canvas(root, width=930, height=500, background="white",cursor="pencil")
canvas.place(x=90,y=10)

canvas.bind("<Button-1>",locate_xy)
canvas.bind("<B1-Motion>",addLine)


#Slider

def get_current_value():
   return "{: .2f}".format(current_value.get())

def slider_changed(event):
   value_label.configure(text=get_current_value())

current_value = tk.DoubleVar()
slider = ttk.Scale(root,from_=0,to=100,orient="horizontal",command=slider_changed,variable=current_value)
slider.place(x=30,y=530)

value_label = ttk.Label(root,text=get_current_value())
value_label.place(x=27,y=550)



root.mainloop()