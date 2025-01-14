---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/acpi/x86/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_ACPI)	+= acpi-x86.o
acpi-x86-y		+= apple.o
acpi-x86-y		+= cmos_rtc.o
acpi-x86-$(CONFIG_PCI)	+= lpss.o
acpi-x86-y		+= s2idle.o
acpi-x86-y		+= utils.o

obj-$(CONFIG_X86)	+= blacklist.o

```
