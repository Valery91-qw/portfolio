import Container from '../common/Container';

const submit = 'https://formsubmit.co/43c6e659a5f668b6526105fa226276b3';
export default function Form() {
  return (
    <section className="bg-zinc-900 text-zinc-50">
      <Container tag="form" classes="flex flex-col items-center" method="post" action={submit}>
        <>
          <label htmlFor="first">First name</label>
          <input className="text-zinc-900" type="text" id="first" name="first" required />

          <label htmlFor="second">Second name</label>
          <input className="text-zinc-900" type="text" id="second" name="second" required />
        </>
        <button type="submit">Submit</button>
      </Container>
    </section>
  );
}
