"use client"

import supabase from '@/config/supabase';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {register, handleSubmit} = useForm();

  const insert = async (data) => {
    try {
      await supabase.from("questions").insert(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form onSubmit={handleSubmit(insert)}>
            <label>Nom : </label>
            <input type="text" name="firstname" {...register("firstname")} ></input><br></br>

            <label>Prénom : </label>
            <input type="text" name="lastname" {...register("lastname")}></input><br></br>

            <label>Age : </label>
            <input type="int" name="age" {...register("age")}></input><br></br>

            <div>
                <input type="radio" name="gender" value="homme" {...register("gender")}/>
                <label>Homme</label>
                <input type="radio" name="gender" value="femme" {...register("gender")}/>
                <label>Femme</label>
                <input type="radio" name="gender" value="autre" {...register("gender")}/>
                <label>Autre</label>
            </div><br></br>

            <div>
                <label>Ville : </label>
                <select name ="city" {...register("city")}>
                    <option value="Paris">Paris</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Toulouse">Toulouse</option>
                </select>
            </div><br></br>

            <label>Situation : </label>
            <textarea name="situation" {...register("situation")}></textarea><br></br>
            <button>Envoyer</button>
        </form>
    </main>
  );
}
