---
sidebar_position: 22
---
# xor

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/xor`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic bitwise XOR with ${desc_order} ordering
 * @i: ${int} value
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v ^ @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
