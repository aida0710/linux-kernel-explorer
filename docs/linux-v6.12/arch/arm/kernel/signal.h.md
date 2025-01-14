---
sidebar_position: 62
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/kernel/signal.h`

### コンテンツ

```h
#include <asm/ucontext.h>

struct sigframe {
	struct ucontext uc;
	unsigned long retcode[4];
};

struct rt_sigframe {
	struct siginfo info;
	struct sigframe sig;
};

extern struct page *get_signal_page(void);

```
