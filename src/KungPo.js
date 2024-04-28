import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function KungPo() {
  return (
    <Flex flexDirection={"column"}>
      <Center>
        <Box w="80%">
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            {/* Video Section */}
            <Box>
              <Heading as="h2" size="lg" textAlign="center">
                Song
              </Heading>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZSCFvZ3uvak?si=S5Gu2QZeiFXsk2SE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>

            {/* Lyrics Section */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <VStack align="stretch" spacing="4">
                <Heading as="h2" size="lg" textAlign="center">
                  Lyrics
                </Heading>
                <Text whiteSpace="pre-line">
                  我有一隻小毛驢我從來也不騎 有一天我心血來潮騎著去趕集
                  <br />
                  在我記憶中從來沒有這麼熱的夏天 沒可能今天只有38度
                  <br />
                  一大早吃完燒餅油條就去耕田 幸福就是規律過一天一天
                  <br />
                  我愛 這種簡單的感覺
                  <br />
                  快樂像一盤hot and spicy 宮保雞丁
                  <br />
                  選一塊好雞配一點乾辣椒 加上蔥花大蒜 花生別忘記
                  <br />
                  我來到鎮上帶著我的大公雞mimi 在熱熱鬧鬧買賣人群
                  <br />
                  你就像天使出現穿著一個碎花裙 你的笑讓我一見鍾情
                  <br />
                  我愛 這種簡單的感覺
                  <br />
                  就算天塌下來也不是什麼問題
                  <br />
                  我只希望每天跟你在一起 不用做什麼在家裡就可以
                  <br />
                  我只要你做我的baby my little chickadee
                  <br />
                  I don't care 你發大小姐脾氣 或者你要跟我玩愛的遊戲
                  <br />
                  Ooh you're my baby
                  <br />
                  Ooh 愛就像是宮保雞丁
                  <br />
                  我躺在草原地 我迷失在你眼中 我的心像風箏斷線飄零
                  <br />
                  我真的擁有你 我還不能相信 我常會用力捏我自己看我是否清醒
                  <br />
                  Oh baby i dont know為什麼看上我
                  <br />
                  沒有錢去送你hello kitty
                  <br />
                  可以 我所有的一切通通都給你 因為我愛你
                  <br />
                  你親愛Daddy捨不得把他的甜心嫁給我 我看他真的好像有點難過
                  <br />
                  我沒有賓士沒有鑽戒可是我願意 給你我心愛的大公雞
                  <br />
                  我只要每天跟你粘在一起 不用做什麼在家裡就可以
                  <br />
                  我只要你做我的baby (get up get up)
                  <br />
                  I don't care 你發大小姐脾氣 或著你要跟我玩愛的遊戲
                  <br />
                  Ooh you're my baby (that's right)
                  <br />
                  我只希望每天跟你粘在一起 不用做什麼在家裡就可以
                  <br />
                  我只要你做我的baby (my little baby yeah)
                  <br />
                  I don't care 你發大小姐脾氣 或著你要跟我玩愛的遊戲
                  <br />
                  Ooh you're my baby baby baby
                  <br />
                  Woo woo woo
                  <br />
                  Woo 愛就像是宮保雞丁 yeah
                </Text>
              </VStack>
            </Box>
          </Flex>

          {/* Text Sections */}
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w="50%" mr={{ base: 0, md: "4" }}>
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Dish Introduction
                </Heading>
                <UnorderedList>
                  <ListItem>
                    宫保鸡丁是一道著名的川菜，以麻辣鲜香的口味而出名。
                  </ListItem>
                  <ListItem>
                    这道菜的历史非常的长。传说是在清朝道光年间，由四川省巡抚丁宝桢创造地。丁宝桢的官职为“宫保”，所以这道菜就叫“宫保鸡丁”。
                  </ListItem>
                  <ListItem>
                    宫保鸡丁的主要食材是鸡肉、花生、辣椒、姜、蒜等。鸡肉通常选用鸡腿肉，切成小丁腌制。花生可以油炸或炒熟，增添香气和口感
                  </ListItem>
                  <ListItem>
                    辣椒是这道菜的灵魂。四川辣椒的麻辣味为宫保鸡丁带来独特的风味。姜和蒜是常用的调味料，可以去除鸡肉的腥味，增加香味。
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box w="50%">
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Meaning
                </Heading>
                <UnorderedList>
                  <ListItem>
                    这首歌以“宫保鸡丁”比喻爱情，形容爱情像宫保鸡丁一样美味诱人，让人回味无穷
                  </ListItem>
                  <ListItem>
                    歌词中提到了宫保鸡丁的各种特色，包括鸡肉的鲜嫩，花生米的香脆，辣椒的辛辣，以及整体菜肴的酸甜可口。
                  </ListItem>
                  <ListItem>
                    这首歌想形容爱情像像宫保鸡丁一样，有甜有辣，有软有脆，非常的丰富。
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
      <Center marginTop="5em" padding="2em">
        <Link to={"/"}>Back Home</Link>
      </Center>
    </Flex>
  );
}
