import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const current = useMemo(
    () => (theme === 'system' ? systemTheme : theme),
    [systemTheme, theme]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-4">
      {current === 'dark' ? (
        <BsFillSunFill
          color="yellow"
          role="button"
          onClick={() => setTheme('light')}
          size="20"
          className="mr-2"
        />
      ) : (
        <BsFillMoonFill
          color="gray"
          role="button"
          onClick={() => setTheme('dark')}
          size="20"
          className="mr-2"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
