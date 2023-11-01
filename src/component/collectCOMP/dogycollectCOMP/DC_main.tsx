import styled from "styled-components";
import { useEffect, useState } from "react";
import DogyBox from "./dogy_Box";
import Pagenation from "../pagenation";
import SearchFilter from "./dogy_searchfilter";
import {
  BoxContainer,
  MainBox,
  No_return,
  Title,
  Wrapper,
} from "../../../styles/collect_main_styled";
import { useParams } from "react-router-dom";
import { DogsCollecturl, DogsTypeSearchurl } from "../../../utils/collect_url";
import axios from "../../../utils/config";
import { IDogsAPI } from "../../../types/dogscollect_types";

const SearchBtn = styled.button`
  align-self: flex-end;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
  margin-top: -1vh;
  margin-bottom: -6vh;
`;
////////////////////////////////
export interface IDogyFilterParams {
  dogtype: number;
  verification: boolean;
  isAvailable: boolean;
  gender: string;
  size: string;
}
///////////////////////////////////

export default function DC_main() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [loading, setLoading] = useState(false);
  //////////////////////////////////////////////////////
  const [onSearch, setOnSearch] = useState(false);
  const [onUseFilter, setOnUseFilter] = useState(false);
  const [category, setCategory] = useState({
    dogtype: 0,
    verification: false,
    isAvailable: false,
    gender: "",
    size: "",
  });
  const [dogs, setdogs] = useState<IDogsAPI>();
  ///////////////////////////////////////////////////////////

  const getDogs = async () => {
    try {
      setLoading(true);
      if (onUseFilter) {
        setPage(1);
      }
      const url = DogsCollecturl({ page, category });
      const response = await axios.get(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setdogs(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setOnUseFilter(false);
    }
  };

  useEffect(() => {
    getDogs();
  }, [category, page]);
  return (
    <Wrapper>
      <MainBox>
        <Title>강아지 모아보기</Title>
        <SearchBtn onClick={() => setOnSearch(!onSearch)}>검색 필터</SearchBtn>
        {loading ? (
          <Title>잠시만 기다려 주십시오...</Title>
        ) : (
          <>
            {dogs?.data.totalElements != 0 ? (
              <BoxContainer>
                {dogs?.data.content.map((box) => (
                  <DogyBox
                    key={box.id}
                    id={box.id}
                    name={box.name}
                    type={box.type}
                    gender={box.gender}
                    status={box.status}
                    birthDate={box.birthDate}
                    imgUrl={box.imgUrl}
                    breederNickName={box.breederNickName}
                    isBreederVerified={box.isBreederVerified}
                  />
                ))}
              </BoxContainer>
            ) : (
              <No_return>
                <div>검색조건에 맞는 강아지가 없습니다.</div>
              </No_return>
            )}
          </>
        )}
      </MainBox>
      <Pagenation
        page={page}
        totalPage={Number(dogs?.data.totalPages)}
        setPage={setPage}
        name={"dogys"}
      />
      {onSearch ? (
        <SearchFilter
          setOnSearch={setOnSearch}
          category={category}
          setCategory={setCategory}
          setOnUseFilter={setOnUseFilter}
        />
      ) : null}
    </Wrapper>
  );
}
