---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/intel/catpt/Makefile`

### コンテンツ

```txt
snd-soc-catpt-y := device.o dsp.o loader.o ipc.o messages.o pcm.o sysfs.o

# tell define_trace.h where to find the trace header
CFLAGS_device.o := -I$(src)

obj-$(CONFIG_SND_SOC_INTEL_CATPT) += snd-soc-catpt.o

```
