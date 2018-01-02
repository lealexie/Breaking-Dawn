from wordcloud import WordCloud
file = open("bw.txt","r").read()
wordcloud = WordCloud(background_color="white",width=1000, height=860, margin=2).generate(file)

import matplotlib.pyplot as plt
plt.imshow(wordcloud)
plt.axis("off")
plt.show()

wordcloud.to_file('test.png')

file.close()