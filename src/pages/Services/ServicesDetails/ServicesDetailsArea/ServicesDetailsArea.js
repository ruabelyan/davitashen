import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const ServicesDetailsArea = (id) => {

   console.log('id', id)


   const renderTitle = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <h2>Թերապևտիկ բաժանմունք</h2>
            </div>
         case '2':
            return <div className="row">
               <h2>Մանկական բաժանմունք</h2>
            </div>
         case '3':
            return <div className="row">
               <h2>Նեղ մասնագիտական բաժանմունք</h2>
            </div>
         case '4':
            return <div className="row">
               <h2>Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք</h2>
            </div>
         default:
            return <div>Value not between 1 and 4</div>;
      }
   };
   const renderContent = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <HomeSingleTeam imgUrl='../img/doctors/10.jpg' title="Աննա Գալաջյան" />
               <HomeSingleTeam imgUrl='../img/doctors/20.jpg' title="Աննա Մելիք-Փաշայան" />
               <HomeSingleTeam imgUrl='../img/doctors/12.jpg' title="Էմմա Գրիգորյան" />
               <HomeSingleTeam imgUrl='../img/doctors/3.jpg' title="Աստղիկ Դավթյան" />
               <HomeSingleTeam imgUrl='../img/doctors/19.jpg' title="Հասմիկ Մանուկյան" />
               <HomeSingleTeam imgUrl='../img/doctors/18.jpg' title="Մարիամ Հովհաննիսյան" />
               <HomeSingleTeam imgUrl='../img/doctors/14.jpg' title="Ջուլիետտա Զոհրաբյան" />
               <HomeSingleTeam imgUrl='../img/doctors/1.jpg' title="Վալերի Ադամյան" />

            </div>
         case '2':
            return <div className="row">
               <HomeSingleTeam imgUrl='../img/doctors/25.jpg' title="Անուշիկ Սահակյան" />
               <HomeSingleTeam imgUrl='../img/doctors/6.jpg' title="Գոհար Բաբայան" />
               <HomeSingleTeam imgUrl='../img/doctors/21.jpg' title="Ծաղիկ Միդուրյան" />
               <HomeSingleTeam imgUrl='../img/doctors/13.jpg' title="Հասմիկ Երվանդյան" />
               <HomeSingleTeam imgUrl='../img/doctors/17.jpg' title="Հասմիկ Հովակիմյան" />
               <HomeSingleTeam imgUrl='../img/doctors/24.jpg' title="Ռոմելլա Միրզոյան" />
               <HomeSingleTeam imgUrl='../img/doctors/15.jpg' title="Մարինե Իգիթյան" />
            </div>;
         case '3':
            return <div className="row">
               <HomeSingleTeam imgUrl='../img/doctors/2.jpg' title="Աննա Ասոյան" />
               <HomeSingleTeam imgUrl='../img/doctors/5.jpg' title="Գայանե Ավետիկյան" />
               <HomeSingleTeam imgUrl='../img/doctors/22.jpg' title="Լուսինե Միրազիզյան" />
               <HomeSingleTeam imgUrl='../img/doctors/8.jpg' title="Գոհար Բաբայան" />
               <HomeSingleTeam imgUrl='../img/doctors/16.jpg' title="Ստեփան Կսպոյան" />
               <HomeSingleTeam imgUrl='../img/doctors/27.jpg' title="Սերգեյ Գինոսյան" />
            </div>;
         case '4':
            return <div className='row'>
               <HomeSingleTeam imgUrl='../img/doctors/9.jpg' title="Գայանե Բարսելյանց" />
               <HomeSingleTeam imgUrl='../img/doctors/23.jpg' title="Դիանա Մկրտչյան" />
               <HomeSingleTeam imgUrl='../img/doctors/7.jpg' title="Մարինե Բաբայան" />
               <HomeSingleTeam imgUrl='../img/doctors/28.jpg' title="Մուշեղ Ստեփանյան" />
               <HomeSingleTeam imgUrl='../img/doctors/11.jpg' title="Սուսան Գևորգյան" />
               <HomeSingleTeam imgUrl='../img/doctors/29.jpg' title="Վարվառա Հակոբյան" />
            </div>;
         default:
            return <div className='row'>Value not between 1 and 4</div>;
      }
   };
   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               {renderTitle()}
               {renderContent()}
            </div>
         </section>
      </>
   );
};

export default ServicesDetailsArea;