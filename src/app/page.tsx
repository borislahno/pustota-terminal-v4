'use client'
import VideoBackground from '@/components/VideoBackground';
import TypewriterEffect from '@/components/TypewriterEffect';
import Terminal from '@/components/Terminal/Terminal';
import Info from '@/components/Info';
import Help from '@/components/Help';

export default function Home() {

  return (
    <main className="w-full h-full px-[32px] py-[20px]">
      <div className="relative z-[100] flex justify-center mb-[29px] text-lg text-white">
        Pustota Terminal
      </div>
      <Info/>
      <VideoBackground/>
      <div className="relative z-[100]">
        <TypewriterEffect>
          ping 192.168.0.1 -t ... Gateway down...
        </TypewriterEffect>
        <TypewriterEffect delay={1100}>
          cd /hidden/data/... Access denied.
        </TypewriterEffect>
        <TypewriterEffect delay={2100}>
          twostep_authcommand.bui
        </TypewriterEffect>
        <TypewriterEffect delay={2600}>
          Username: wq548713
        </TypewriterEffect>
        <TypewriterEffect delay={3440} showAfterText={<br/>}>
          Password: *******************
        </TypewriterEffect>
        <TypewriterEffect delay={4800} showAfterText={<br/>}>
          ACCESS TO SYSTEM
        </TypewriterEffect>
        <TypewriterEffect delay={5750}>
          Version 0.1.7
        </TypewriterEffect>
        <TypewriterEffect delay={6100} showAfterText={<><br/><br/></>}>
          Initializing...
        </TypewriterEffect>
        <TypewriterEffect className="font-Minecraft text-6xl" delay={6520} speed={200}>
          PUSTOTA
        </TypewriterEffect>
        <TypewriterEffect delay={7720}>
          Type “connect” or “info” to get started.
        </TypewriterEffect>
      </div>
      <Terminal/>
      <Help/>
    </main>
  );
}
