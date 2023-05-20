import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TransformerToyCard from "./TransformerToyCard/TransformerToyCard";
import MarvelToyCard from "./marvelToy/MarvelToyCard";
import AvengerToyCard from "./avengerToy/AvengerToyCard";



const ReactTab = () => {
  const [heroToys, setHeroToys] = useState();
  const [category, setCategory] = useState('Transformers Toy')

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        if(data.length){
            const filter = data.filter(toy => toy.subCategory == category);
            setHeroToys(filter);
            console.log(filter)
        }
      });
  }, [category]);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab onClick={()=>setCategory('Transformers toy')}><span className="font-bold text-teal-600">Transformers Toys</span></Tab>
          <Tab onClick={()=>setCategory('Marvel toy')}><span className="font-bold text-teal-600">Marvel Toy</span></Tab>
          <Tab onClick={()=>setCategory('Avenger toy')}><span className="font-bold text-teal-600">Avengers Toy</span></Tab>
        </TabList>

        
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              heroToys &&  heroToys.map(transformer => <TransformerToyCard
                key={transformer.name}
                transformer={transformer}
                ></TransformerToyCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                heroToys && heroToys.map(marvel => <MarvelToyCard
                key={marvel.name}
                marvel={marvel}
                ></MarvelToyCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                heroToys && heroToys.map(avenger => <AvengerToyCard
                key={avenger.name}
                avenger={avenger}
                ></AvengerToyCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
