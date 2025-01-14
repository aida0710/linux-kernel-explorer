---
sidebar_position: 112
---
# zImage.coff.lds.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/zImage.coff.lds.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
OUTPUT_ARCH(powerpc:common)
ENTRY(_zimage_start_opd)
EXTERN(_zimage_start_opd)
SECTIONS
{
  .text      :
  {
    _start = .;
    *(.text)
    *(.fixup)
    _etext = .;
  }
  . = ALIGN(4096);
  .data    :
  {
    *(.rodata*)
    *(.data*)
    *(__builtin_*)
    *(.sdata*)
    *(.got2)

    _dtb_start = .;
    *(.kernel:dtb)
    _dtb_end = .;

    _vmlinux_start =  .;
    *(.kernel:vmlinux.strip)
    _vmlinux_end =  .;

    _initrd_start =  .;
    *(.kernel:initrd)
    _initrd_end =  .;
  }

  . = ALIGN(4096);
  _edata  =  .;
  __bss_start = .;
  .bss       :
  {
   *(.sbss)
   *(.bss)
  }
  _end = . ;

  /DISCARD/ :
  {
    *(.comment)
  }
}

```
