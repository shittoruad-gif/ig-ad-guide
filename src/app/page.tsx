"use client";

import { useState } from "react";
import { useSlide } from "@/hooks/useSlide";
import TopNav from "@/components/TopNav";
import Drawer from "@/components/Drawer";
import PageBar from "@/components/PageBar";
import SlideFooter from "@/components/SlideFooter";
import S1 from "@/components/slides/S1";
import S2 from "@/components/slides/S2";
import S3 from "@/components/slides/S3";
import S4 from "@/components/slides/S4";
import S5 from "@/components/slides/S5";
import S6 from "@/components/slides/S6";
import S7 from "@/components/slides/S7";
import S8 from "@/components/slides/S8";
import S9 from "@/components/slides/S9";
import S10 from "@/components/slides/S10";
import S11 from "@/components/slides/S11";
import S12 from "@/components/slides/S12";
import S13 from "@/components/slides/S13";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { current, total, goPage } = useSlide();

  return (
    <>
      <TopNav onToggleDrawer={() => setDrawerOpen((v) => !v)} />
      <PageBar current={current} total={total} />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="slides">
        <S1 />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        <S7 />
        <S8 />
        <S9 />
        <S10 />
        <S11 />
        <S12 />
        <S13 />
      </div>
      <SlideFooter current={current} total={total} goPage={goPage} />
    </>
  );
}
