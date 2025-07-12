import { useQuery } from '@tanstack/react-query';

import getHello from '../../api/hello';

const Hello = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['hello'],
    queryFn: getHello,
  });

  return (
    <div className="flex flex-col justify-center items-center h-dvh align-middle">
      <h1>NASA Explorer</h1>
      {data && <p>{data.message}</p>}
      {(isPending || isFetching) && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Hello;
