"use client"

import supabase from '@/config/supabase';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function Form() {
  const {register, handleSubmit} = useForm();
   const [job, setJob] = useState();

  const insert = async (data) => {
    try {
      await supabase.from("answers").insert(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const defineJob = (e) => {
    setJob(e.target.value);
  }

  return (
    <main>
      <div className="container border border-gray-300 rounded bg-white">
        <div className='p-8'>
        <img className=" rounded-md" src="/background.jpg"></img>
        <form onSubmit={handleSubmit(insert)}>
            <div className='mb-10'>
              <h1>Nom et Prénom :</h1>
              <p>Veuillez saisir votre nom puis votre prénom, si vous avez des prénoms secondaires n'hésitez pas à la ajouter à la suite.</p>
              <input className="rounded border-2 border-gray-200 w-full" type="text" name="names" {...register("names")}></input>
            </div>

            <div className='mb-10'>
              <h1>Âge :</h1>
              <p>Renseigner votre âge nous aidera à personnaliser votre expérience.</p>
              <input className="rounded border-2 border-gray-200 w-full" type="int" name="age" {...register("age")}></input>
            </div>

            <div className='mb-10'>
              <h1>Genre :</h1>
              <p className='sm:hidden'>Précisez votre genre :</p>
              <div className="flex justify-between">
              <p className='max-sm:hidden'>Précisez votre genre :</p>
                <div>
                  <label>Homme</label>&nbsp;
                  <input type="radio" id="homme" name="gender" value="homme" {...register("gender")} className="mr-2"/>
                 </div>
                <div>
                  <label>Femme</label>&nbsp;
                  <input type="radio" id="femme" name="gender" value="femme" {...register("gender")} className="mr-2"/>
                </div>
                <div>
                  <label>Autre</label>&nbsp;
                  <input type="radio" id="autre" name="gender" value="autre" {...register("gender")} className="mr-2"/>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h1>Ville :</h1>
              <p>Si votre ville ne figure pas sur la liste, veuillez sélectionner la plus proche.</p>
                <select className="rounded border-2 border-gray-200 w-full" name ="city" {...register("city")}>
                    <option value="Paris">Paris</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Toulouse">Toulouse</option>
                </select>
            </div>
 
            <div className='mb-10'>
              <h1>Situation :</h1>
              <p className='sm:hidden'>Occupez-vous actuellement un emploi ? : </p>
              <div className='flex justify-between max-sm:justify-center max-sm:gap-20'>
                <p className='max-sm:hidden'>Occupez-vous actuellement un emploi ? : </p>
                <div>
                  <label>Oui</label>&nbsp;
                  <input type="radio" name="jobRadio" value="yes" onChange={defineJob}/>&nbsp;&nbsp;
                </div>
                <div>
                  <label>Non</label>&nbsp;
                  <input type="radio" name="jobRadio" value="no" onChange={defineJob}/>&nbsp;&nbsp;
                </div>
              </div>
            </div>

            <div className='mb-10'>
              {job === "yes" && (
                <div>
                  <h1>Emploi :</h1>
                  <p>Cette information permettra d'affiner nos statistiques.</p>
                  <input className="rounded border-2 border-gray-200 w-full" type="text" name="jobText" {...register("job")}></input>
                </div>
              )}
            </div>

            <div className='mb-10'>
              <h1>Email :</h1>
              <p>Afin de vous tenir au courant de notre actualité.</p>
              <input className="rounded border-2 border-gray-200 w-full" type="email" name="email" {...register("email")}></input>
            </div>

            <div className='mb-10'>
              <h1>Avis :</h1>
              <p>Avez-vous des suggestions ou des idées pour améliorer nos services ?</p>
              <textarea className="rounded border-2 border-gray-200 w-full" name="opinion" {...register("opinion")}></textarea>
            </div>

            <button className='max-sm:hidden font-semibold py-2 px-4 rounded border border-gray-100'>Envoyer vos réponses<i className="ml-3 fa-solid fa-square-arrow-up-right"></i></button>
            <button className='sm:hidden font-semibold py-2 px-4 rounded border border-gray-100'>Envoyer<i className="ml-3 fa-solid fa-square-arrow-up-right"></i></button>
        </form>
        </div>
      </div>
    </main>
  );
}
