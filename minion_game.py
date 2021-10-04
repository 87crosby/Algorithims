'''Game Rules

Both players are given the same string, S.
Both players have to make substrings using the letters of the string .
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels.
The game ends when both players have made all possible substrings.

Scoring
A player gets +1 point for each occurrence of the substring in the string .

For Example:
String S = BANANA
Kevin's vowel beginning word = ANA
Here, ANA occurs twice in BANANA. Hence, Kevin will get 2 Points.'''

def minion_game(s):
    # your code goes here
    vowels = 'AEIOU'

    kevin_score = 0
    stuart_score = 0
    for i in range(len(s)):
        if s[i] in vowels:
            kevin_score += (len(s)-i)
        else:
            stuart_score += (len(s)-i)

    if kevin_score > stuart_score:
        print ("Kevin", kevin_score)
    elif kevin_score < stuart_score:
        print ("Stuart", stuart_score)
    else:
        print("Draw")

            
        
    

if __name__ == '__main__':
    s = 'BANANA'
    minion_game(s)
