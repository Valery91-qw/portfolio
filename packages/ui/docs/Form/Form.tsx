import Container from '../common/Container';

const submit = 'https://formsubmit.co/43c6e659a5f668b6526105fa226276b3';
export default function Form() {
  return (
    <section className="bg-zinc-900 text-zinc-50">
      <Container tag="form" classes="flex flex-col items-center gap-3" method="post" action={submit}>
        <div>
          <label className="block text-center" htmlFor="first">First name</label>
          <input className="text-zinc-900" type="text" id="first" name="first" required />
        </div>
        <div>
          <label className="block text-center" htmlFor="second">Second name</label>
          <input className="text-zinc-900" type="text" id="second" name="second" required />
        </div>
        <button className="px-10 py-2 bg-zinc-50 text-zinc-900 rounded-xl" type="submit">Submit</button>
      </Container>
    </section>
  );
}
