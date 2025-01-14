---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/kvm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for LoongArch KVM support
#

ccflags-y += -I $(src)

include $(srctree)/virt/kvm/Makefile.kvm

obj-$(CONFIG_KVM) += kvm.o

kvm-y += exit.o
kvm-y += interrupt.o
kvm-y += main.o
kvm-y += mmu.o
kvm-y += switch.o
kvm-y += timer.o
kvm-y += tlb.o
kvm-y += vcpu.o
kvm-y += vm.o

CFLAGS_exit.o	+= $(call cc-option,-Wno-override-init,)

```
