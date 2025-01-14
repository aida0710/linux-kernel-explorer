---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/power/Makefile`

### コンテンツ

```txt
obj-y	+= platform.o

obj-$(CONFIG_SUSPEND)		+= suspend.o suspend_asm.o
obj-$(CONFIG_HIBERNATION)	+= hibernate.o hibernate_asm.o

```
