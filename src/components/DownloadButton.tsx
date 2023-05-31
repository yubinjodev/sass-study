import '../../styles/components/_buttons.scss'

type Props={
    icon:React.ReactNode;
    text:string;
}

export default function DownloadButton(props: Props){
    const {icon, text} = props;

    return(<div className="downloadbutton">
        <div id="icon" >
          {icon}
        </div>
        <div className="downloadbutton__text">{text}</div>
    </div>)
}