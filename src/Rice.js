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

export default function Rice() {
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
                src="https://www.youtube.com/embed/m0rXFml9uok?si=nvM1-kYR-CDAH-dx"
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
                  屈指一算 這滿漢樓已待了三年半
                  <br />
                  每天挑水劈柴 嗯 可沒偷懶
                  <br />
                  端盤子掃地洗碗 我可勤快
                  <br />
                  師父說我是塊料 傳授我中國菜的精髓所在
                  <br />
                  日苦練 夜苦練基本功 不曾間斷
                  <br />
                  到現在我的刀法精湛 三兩肉飛快 我已鋪滿一大盤 啊
                  <br />
                  到現在我的手勁兒實在 鐵鍋甩十斤小石子在鍋裡翻
                  <br />
                  師父說能不能出師要過他那關 他叫我炒一盤 啊 蛋炒飯
                  <br />
                  徒說：搞什麼啊？這會不會太……太難啦？
                  <br />
                  師說：少囉嗦！師父叫你做你就做唄！
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 飯要粒粒分開 還要沾著蛋
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 鐵鍋翻的不夠快 保證砸了招牌
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 這題目太刁鑽 可我手藝並非泛泛
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 中國五千年 火的藝術就在這一盤
                  <br />
                  滿漢樓裡 高手雲集
                  <br />
                  放眼中國 享譽盛名
                  <br />
                  傳至我輩 精益求精
                  <br />
                  若非庖丁 無人可比
                  <br />
                  客倌說：小二ㄝ
                  <br />
                  小二說：來ㄝ！客倌要點什麼啊？
                  <br />
                  客倌說：你們店裡有啥好吃的啊？
                  <br />
                  小二說：客倌，咱們滿漢樓遠近馳名，什麼菜都好吃！
                  <br />
                  客倌說：好唄！那就來一盤蛋炒飯
                  <br />
                  小二說： 啊？
                  <br />
                  到現在我的刀法精湛 三兩肉飛快 我已鋪滿一大盤 啊
                  <br />
                  到現在我的手勁兒實在 鐵鍋甩十斤小石子在鍋裡翻
                  <br />
                  師父說能不能出師要過他那關 他叫我炒一盤 啊 蛋炒飯
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 飯要粒粒分開 還要沾著蛋
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 鐵鍋翻的不夠快 保證砸了招牌
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 這題目太刁鑽 可我手藝並非泛泛
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 中國五千年 火的藝術就在這一盤
                  <br />
                  滿漢樓裡 高手雲集
                  <br />
                  放眼中國 享譽盛名
                  <br />
                  傳至我輩 精益求精
                  <br />
                  若非庖丁 無人可比
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 飯要粒粒分開 還要沾著蛋
                  <br />
                  滿漢樓裡 高手雲集 放眼中國 享譽盛名
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 鐵鍋翻的不夠快 保證砸了招牌
                  <br />
                  傳至我輩 精益求精 若非庖丁 無人可比
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 這題目太刁鑽 可我手藝並非泛泛
                  <br />
                  滿漢樓裡 高手雲集 放眼中國 享譽盛名
                  <br />
                  嘿 蛋炒飯 最簡單也最困難 這五千年 火的藝術就在這一盤
                  <br />
                  傳至我輩 精益求精 若非庖丁 無人可比
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
                    蛋炒饭，是一种以鸡蛋、米饭为主要食材的常见菜。
                  </ListItem>
                  <ListItem>
                    蛋炒饭是中国的一道家常菜，也是许多中国人学会做的第一道美食
                  </ListItem>
                  <ListItem>
                    蛋炒饭的起源可以追溯到隋朝。当时，人们将鸡蛋和剩米饭一起炒制，作为一种简单快捷的料理。到了唐朝，蛋炒饭已经成为一种常见的菜肴。
                  </ListItem>
                  <ListItem>
                    随着时间，蛋炒饭的做法不断改进，逐渐形成了各地特色的蛋炒饭。比如像扬州炒饭以刀工精细、配料丰富而闻名和天津炒饭以米饭粒粒分明、香气扑鼻而出名。
                  </ListItem>
                  <ListItem>
                    蛋炒饭不仅是一种美味佳肴，更是一种重要的文化符号。在一些国家，蛋炒饭被视为中国文化的代表之一。例如，在美国，蛋炒饭是许多中餐厅的必备菜品。
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
                    歌曲轻松的曲风和幽默的歌词，传递了积极乐观的生活态度。即使是平凡的生活，也能充满乐趣。
                  </ListItem>
                  <ListItem>
                    这首歌表达了生活就像做蛋炒饭一样，有简单也有困难，但只要我们拥有积极乐观的心态，就能够克服困难，享受生活的乐趣。
                  </ListItem>
                  <ListItem>
                    这首歌也展现了中华美食文化的精神。蛋炒饭作为一道中华传统美食，历史悠久，做法简单，但要想做得好却并不容易。
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
