---
sidebar_position: 6
---
# README

### ファイル情報

- パス: `linux-v6.12/kernel/bpf/preload/iterators/README`

### コンテンツ

```txt
WARNING:
If you change "iterators.bpf.c" do "make -j" in this directory to
rebuild "iterators.lskel-little-endian.h". Then, on a big-endian
machine, do "make -j big" in this directory to rebuild
"iterators.lskel-big-endian.h". Commit both resulting headers.
Make sure to have clang 10 installed.
See Documentation/bpf/bpf_devel_QA.rst

```
