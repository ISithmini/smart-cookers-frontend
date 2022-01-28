type homeprops = {
    data: {
        title: string,
        description: string,
    };
}

export const HomeSection = (props: homeprops) => {

    return (
        <div className="home">
            {props.data.title}

        </div>
    )
}

