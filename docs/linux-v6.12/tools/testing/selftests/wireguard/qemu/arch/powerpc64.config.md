---
sidebar_position: 12
---
# powerpc64.config

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/wireguard/qemu/arch/powerpc64.config`

### コンテンツ

```config
CONFIG_PPC64=y
CONFIG_PPC_PSERIES=y
CONFIG_ALTIVEC=y
CONFIG_VSX=y
CONFIG_PPC_OF_BOOT_TRAMPOLINE=y
CONFIG_PPC_RADIX_MMU=y
CONFIG_HVC_CONSOLE=y
CONFIG_CPU_BIG_ENDIAN=y
CONFIG_CMDLINE_BOOL=y
CONFIG_CMDLINE="console=hvc0 wg.success=hvc1 panic_on_warn=1"
CONFIG_SECTION_MISMATCH_WARN_ONLY=y
CONFIG_FRAME_WARN=1280
CONFIG_THREAD_SHIFT=14

```
