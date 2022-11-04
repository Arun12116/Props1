const Props = ({ colors }) => {
    // console.log(colors);
    return (
        <>

            <div className="Main">
                <div className="card">
                    {colors.map((items, index) => {
                        // console.log(items);
                        return (
                            <>

                                <div className="Cards" style={{ backgroundColor: items }}>
                                    <h2 className="inner">{items}</h2>
                                    

                                </div>







                            </>
                        )
                    })}

                </div>
            </div>


        </>
    )
}
export default Props;