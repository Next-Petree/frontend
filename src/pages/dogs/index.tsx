/**
 * @author 임유정
 * @description 강아지 모아보기 메인
 */

import axios, { AxiosResponse } from 'axios';
import Layout from 'components/common/Layout';
import Board from 'components/common/board/Board';
import Pagination from 'components/common/board/Pagination';
import { useState, useEffect, FC } from 'react';
import { Page, Pageable } from 'pageable-response';
import DogCard from './DogCard';
import { E_Dog_Gender, E_Dog_Status } from './constatns';
import Detail from './Detail';
import { styled } from 'styled-components';
import SearchModal from './SearchModal';

export interface IDog {
  id: number;
  name: string;
  type: string;
  gender: E_Dog_Gender;
  birthDate: string;
  imgUrl: string;
  status: E_Dog_Status;
  breederNickName: string;
  isBreederVerified: boolean;
}

export interface DogDetailProp extends IDog {
  imagesUrl: Array<string>;
  management: string;
}

const Dogs: FC = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [selectedDogId, setSelectedDogId] = useState<number | undefined>();
  const [selectedDogInfo, setSelectedDogInfo] = useState<DogDetailProp | undefined>();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });

  useEffect(() => {
    fetchDogs({ page: page - 1 });
  }, [page]);

  const fetchDogs = async ({ keyword = '', page = 0 }) => {
    try {
      const {
        data: {
          data: { content, totalPages, first, last, number },
        },
      } = await axios.get<AxiosResponse<Pageable<IDog[]>>>('/dogs', {
        params: {
          page,
          keyword,
        },
      });

      setDogs(content);
      setPageInfo({
        totalPages: totalPages,
        first: first,
        last: last,
        number: number,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDetail = async (id: number) => {
    setSelectedDogId(id);
    try {
      const {
        data: { data },
      } = await axios.get(`dogs/${id}`);
      setSelectedDogInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout style={{ display: 'flex', flexFlow: 'column' }}>
      <Title>강아지 모아보기</Title>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', paddingRight: 90 }}>
        <SearchBtn onClick={() => setIsSearching(true)}>검색 필터</SearchBtn>
      </div>
      <Board
        style={{
          marginBottom: '7.25rem',
          marginTop: '4rem',
        }}
      >
        {dogs.map((dog: IDog) => (
          <DogCard key={dog.id} {...dog} onClick={() => handleDetail(dog.id)} />
        ))}
      </Board>

      {dogs.length ? (
        <Pagination
          style={{
            marginBottom: '4.25rem',
          }}
          totalPage={pageInfo.totalPages}
          currentpage={page}
          first={pageInfo.first}
          last={pageInfo.last}
          onChange={(page) => {
            setPage(page);
          }}
        />
      ) : (
        <div style={{ height: '100vh' }}>
          <NoResult>검색 결과가 없습니다.</NoResult>
        </div>
      )}
      <Mask
        style={{ display: `${selectedDogId || isSearching ? 'block' : 'none'}` }}
        onClick={() => setSelectedDogId(undefined)}
      />
      {selectedDogId && <Detail info={selectedDogInfo} onClose={() => setSelectedDogId(undefined)} />}
      {isSearching && <SearchModal onClose={() => setIsSearching(false)} setDogs={setDogs} setPageInfo={setPageInfo} />}
    </Layout>
  );
};

export default Dogs;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #5a5a5a40;
`;

const Title = styled.p`
  margin-top: 175px;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #4ec1bf;
`;

const SearchBtn = styled.button`
  border-radius: 1em;
  width: 120px;
  height: 52px;
  background: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  margin-top: 59px;
`;

const NoResult = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
`;
