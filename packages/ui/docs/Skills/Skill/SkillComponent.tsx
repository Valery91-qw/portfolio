interface ISkillComponent {
  srcToImg: string
  title: string
}
export default function SkillComponent({ srcToImg, title } : ISkillComponent) {
  return (
    <div className="flex items-center bg-zinc-800 p-5 rounded-lg">
      <img src={srcToImg} alt="alt" width="50px" height="50px" className="mr-10" />
      <div>
        <h3 className="pb-5 text-color-primary">{title}</h3>
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cumque dicta facilis id ipsa odit omnis quaerat saepe sed similique veritatis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
