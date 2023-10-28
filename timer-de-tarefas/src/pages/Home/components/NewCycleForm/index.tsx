import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { MinutesAmountInput, TaskInput } from "../../style";
import { FormContainer } from "./style";

import * as zod from "zod";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);

  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
};