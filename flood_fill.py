# Similar to flood_fill.js but in Python 

def floodFill(canvas,x,y,target):
    new_value = canvas[y][x]

    canvas[y][x] = target
    # check if the spot below is within range and equal to the value_change var
    if (y+1 <= len(canvas) - 1 and canvas[y+1][x]==new_value):
        floodFill(canvas, x, y + 1, target)
    
    # check if the spot above is within range and equal to the new_value var
    if (y - 1 >= 0 and canvas[y-1][x]==new_value):
        floodFill(canvas, x, y - 1, target)
    
    # check if the spot left is within range and equal to the new_value var
    if (x + 1 <= len(canvas[y]) - 1 and canvas[y][x+1]==new_value):
        floodFill(canvas, x + 1, y, target)
    
    # check if the spot right is within range and equal to the new_value var
    if (x - 1 >= 0 and canvas[y][x - 1] == new_value):
        floodFill(canvas, x - 1, y, target)
    

grid = [[3, 2, 4, 4, 4],
        [4, 4, 4, 3, 3],
        [4, 1, 1, 4, 4]]

floodFill(grid,2,1,0)

print(grid)