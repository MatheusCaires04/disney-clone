import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiOutlineGlobal } from "react-icons/ai";

import logo from "/assets/logo.svg";

const Footer = () => {
  return (
    <div className="pt-12 pb-10 text-white text-center flex flex-col items-center gap-6">
      <img src={logo} alt="Logo da Disney" className="w-24 md:w-28" />
      <ul className="text-xs flex flex-wrap justify-center gap-4 px-2">
        <Link className="flex gap-1 hover:text-white/70 duration-150">
          <AiOutlineGlobal className="text-base" />
          Português
          <AiFillCaretDown className="text-base" />
        </Link>
        <Link className="hover:text-white/70 duration-150">
          Termos e Condições de Uso
        </Link>
        <Link className="hover:text-white/70 duration-150">
          Política de privacidade
        </Link>
        <Link className="hover:text-white/70 duration-150">
          Proteção de Dados no Brasil
        </Link>
        <Link className="hover:text-white/70 duration-150">
          Anúncios personalizados
        </Link>
        <Link className="hover:text-white/70 duration-150">
          Dispositivos compátiveis
        </Link>
      </ul>
      <p className="px-4 text-xs">
        ® 2023 Disney, Disney+ e The Walt Disney Company. Todos os direitos
        reservados. Serviço de assinatura paga. Conteúdo sujeito a
        disponibilidade.
      </p>
      <p className="px-4 text-xs">
        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e
        condições. O serviço Disney+ é comercializado por The Walt Disney
        Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
        12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e
        CNPJ/M 73.042.962/0004-20
      </p>
    </div>
  );
};

export default Footer;
