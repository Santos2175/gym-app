import Navbar from '@/components/navbar';
import { SelectedPage } from '@/types/types';
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  return (
    <>
      <div className='app bg-gray-20'>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </>
  );
}

export default App;
