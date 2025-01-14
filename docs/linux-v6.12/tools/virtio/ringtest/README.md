---
sidebar_position: 7
---
# README

### ファイル情報

- パス: `linux-v6.12/tools/virtio/ringtest/README`

### コンテンツ

```txt
Partial implementation of various ring layouts, useful to tune virtio design.
Uses shared memory heavily.

Typical use:

# sh run-on-all.sh perf stat -r 10 --log-fd 1 -- ./ring

```
