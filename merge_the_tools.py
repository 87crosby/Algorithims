'''
Consider the following:

A string, s , of length k where .
An integer, k , where  is a factor of length s .
We can split  into  substrings where each subtring, , consists of a contiguous block of  characters in . Then, use each  to create string  such that:

The characters in  are a subsequence of the characters in .
Any repeat occurrence of a character is removed from the string such that each character in  occurs exactly once. In other words, if the character at some index  in  occurs at a previous index  in , then do not include the character in string .
Given  and , print  lines where each line  denotes string .

Example


There are three substrings of length  to consider: 'AAA', 'BCA' and 'DDE'. The first substring is all 'A' characters, so . The second substring has all distinct characters, so . The third substring has  different characters, so . Note that a subsequence maintains the original order of characters encountered. The order of characters in each subsequence shown is important.

Function Description

Complete the merge_the_tools function in the editor below.

merge_the_tools has the following parameters:

string s: the string to analyze
int k: the size of substrings to analyze
print each substring on a new line
'''
def merge_the_tools(string, k):
    # your code goes here
    chunks = [string[i:i+k] for i in range(0, len(string), k)]
    for word in chunks:
        x = []
        for i in word:
            if i not in x:
                x.append(i)
        list_of_strings = [str(s) for s in x]
        joined_string = "".join(list_of_strings)
        print(joined_string)
        
print(merge_the_tools("AABCAAADA",3)
