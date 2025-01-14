---
sidebar_position: 18
---
# sub

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/sub`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic subtract with ${desc_order} ordering
 * @i: ${int} value to subtract
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v - @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
