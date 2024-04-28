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

export default function Zong() {
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
                src="https://www.youtube.com/embed/Aa5j0_61Xfo?si=r4ekq2jBSeeNjsW0"
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
                  唉呦 我早已说过你跟他应该会分开
                  <br />
                  吵架的理由我也已经知道大概
                  <br />
                  你需要人宠爱 天天叫你Baby
                  <br />
                  这英文 好险我会念
                  <br />
                  不听我的劝 纠缠好几年
                  <br />
                  委屈时借你靠肩 我不收你钱
                  <br />
                  等你想开了 不会再红着眼
                  <br />
                  什么叫正港的情人我来示范一遍
                  <br />
                  烧肉粽 如果你想吃不需要等到端午节
                  <br />
                  烧肉粽 你要酸的甜的苦的辣的随时给你
                  <br />
                  烧肉粽 酸甜苦辣的爱情请把它忘记
                  <br />
                  烧肉粽 我可以陪你也让你出气
                  <br />
                  把你的手借我 请你不用想太多
                  <br />
                  爱你不会说出口 只给你打气加油
                  <br />
                  只喜欢你笑容 所以不用想太多
                  <br />
                  当了一天情人以后 我怕你会嫌不够
                  <br />
                  反正现在分了 就跟你老实说吧
                  <br />
                  之前跟他套招 我真的没有办法
                  <br />
                  我实在不忍心 如果不骗你你会更伤心
                  <br />
                  只是我没想到 你居然会相信
                  <br />
                  不知道你是傻还是真的单纯
                  <br />
                  我想你是傻吧傻才会跟他一起
                  <br />
                  如果莫名奇妙你们又复合了
                  <br />
                  我说的这些就请把它忘了
                  <br />
                  烧肉粽 如果你想吃不需要等到端午节
                  <br />
                  烧肉粽 你要酸的甜的苦的辣的随时给你
                  <br />
                  烧肉粽 酸甜苦辣的爱情请把它忘记
                  <br />
                  烧肉粽 我可以陪你也让你出气
                  <br />
                  把你的手借我 请你不用想太多
                  <br />
                  爱你不会说出口 只给你打气加油
                  <br />
                  只喜欢你笑容 所以不用想太多
                  <br />
                  当了一天情人以后 我怕你会嫌不够
                  <br />
                  把你的手借我 Oh oh oh
                  <br />
                  爱你不会说出口 Oh oh oh yeah～
                  <br />
                  只喜欢你笑容 所以不用想太多
                  <br />
                  当了一天情人以后 我怕你会嫌不够
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
                    烧肉粽，又称肉粽、咸粽，是一种以糯米、肉类为主要食材的粽子。
                  </ListItem>
                  <ListItem>
                    烧肉粽起源于中国福建省，流行于闽南、台湾、香港、澳门等地区。
                  </ListItem>
                  <ListItem>
                    最早的烧肉粽是在南宋时期，当时被称为“肉粽”。到了明清时期，烧肉粽的制作工艺更加成熟，并逐渐传遍到台湾、广东等地。
                  </ListItem>
                  <ListItem>
                    烧肉粽的特点是馅料丰富，口味咸香。常见的烧肉粽馅料有五花肉、香菇、虾米、栗子、莲子、咸蛋黄等。
                  </ListItem>
                  <ListItem>
                    包烧肉粽的方法比较讲究，先将两片粽叶叠成漏斗状，然后填入糯米、猪肉、香菇等馅料，再将粽叶折拢包好，用绳子扎紧。包好的粽子需要放入锅中煮熟，一般需要煮3-4个小时。
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
                    “烧肉粽”作为台湾著名的传统小吃，被歌手比喻成疗伤的良药。酸甜苦辣各种口味，就像爱情中的各种感情，都可以通过烧肉粽来品尝。
                  </ListItem>
                  <ListItem>
                    这首歌以“烧肉粽”为喻，将爱情的酸甜苦辣比作粽子的味道，希望女主角能够忘记过去，重新开始。
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
