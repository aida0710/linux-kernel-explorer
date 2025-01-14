---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/cpu/sgx/Makefile`

### コンテンツ

```txt
obj-y += \
	driver.o \
	encl.o \
	ioctl.o \
	main.o
obj-$(CONFIG_X86_SGX_KVM)	+= virt.o

```
