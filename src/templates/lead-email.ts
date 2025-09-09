export const leadEmail = `
<!doctype html>
<html lang="pt-br" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Automadetech</title>
  <!--[if !mso]><!-->
  <style>
    @media screen and (max-width: 600px){
      .container{width:100% !important}
      .p-sm{padding:24px !important}
      .h1{font-size:24px !important; line-height:32px !important}
      .h2{font-size:18px !important; line-height:26px !important}
      .stack{display:block !important; width:100% !important}
    }
    /* Dark mode friendly defaults */
    @media (prefers-color-scheme: dark){
      body, .bg-body{background:#0b0f13 !important}
      .card{background:#121820 !important; border-color:#1f2a37 !important}
      .text, .muted, .h1, .h2{color:#e5e7eb !important}
      .btn{background:#22c55e !important; color:#0b0f13 !important}
      .link{color:#86efac !important}
    }
  </style>
  <!--<![endif]-->
</head>
<body style="margin:0;padding:0;background:#f3f4f6;" class="bg-body">
  <!-- Preheader (texto de preview oculto) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Automação inteligente para escalar seu negócio com a Automadetech. Experimente grátis.
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3f4f6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <!-- Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px; max-width:600px;">
          <!-- Header / Logo -->
          <tr>
            <td align="left" style="padding:0 8px 16px 8px;">
              <a href="{{brand_url}}" target="_blank" style="text-decoration:none;">
                <img src="{{logo_url}}" width="180" height="" alt="Automadetech" style="display:block;border:0;max-width:180px;">
              </a>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td class="card" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:0;">
              <!-- Hero -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:32px 32px 8px 32px;">
                    <h1 class="h1" style="margin:0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:28px;line-height:36px;color:#111827;">
                      Olá, {{email}} 👋
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 8px 32px;">
                    <p class="text" style="margin:0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;color:#374151;">
                      Já pensou quanto tempo sua equipe economiza quando tarefas repetitivas são executadas <strong>de forma automática</strong>?
                      A <strong>Automadetech</strong> conecta ferramentas, orquestra fluxos e entrega resultados enquanto você foca no crescimento.
                    </p>
                  </td>
                </tr>

                <!-- Bullets -->
                <tr>
                  <td style="padding:16px 32px 8px 32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td class="text" style="font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:24px;color:#374151;">
                          ✅ Automatize processos manuais e reduza erros<br>
                          ✅ Integre CRM, ERP, chat e planilhas em um só fluxo<br>
                          ✅ Ganhe visibilidade com painéis e alertas em tempo real<br>
                          ✅ Implante rápido, sem sobrecarregar o seu time de TI
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td align="center" style="padding:24px 32px 8px 32px;">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="{{cta_url}}" style="height:48px;v-text-anchor:middle;width:280px;" arcsize="12%" strokecolor="#16a34a" fillcolor="#22c55e">
                      <w:anchorlock/>
                      <center style="color:#0b0f13;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">
                        {{cta_label}}
                      </center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-- -->
                    <a class="btn" href="{{cta_url}}" target="_blank"
                       style="display:inline-block;background:#22c55e;border:1px solid #16a34a;border-radius:8px;
                              padding:14px 22px;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                              font-size:16px;line-height:16px;text-decoration:none;color:#0b0f13;font-weight:700;">
                      {{cta_label}}
                    </a>
                    <!--<![endif]-->
                  </td>
                </tr>

                <!-- Social proof (opcional) -->
                <tr>
                  <td style="padding:16px 32px 0 32px;">
                    <p class="muted" style="margin:0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:13px;line-height:20px;color:#6b7280;">
                      Bônus: agende uma demonstração personalizada e receba um blueprint de automação para sua operação.
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:24px 32px 0 32px;">
                    <hr style="border:0;border-top:1px solid #e5e7eb;margin:0;">
                  </td>
                </tr>

                <!-- Footer / Contatos -->
                <tr>
                  <td style="padding:16px 32px 32px 32px;">
                    <p class="muted" style="margin:0 0 8px 0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:18px;color:#6b7280;">
                      Automadetech — Automação feita para escalar seu negócio.
                    </p>
                    <p class="muted" style="margin:0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:18px;color:#6b7280;">
                      📧 <a class="link" href="mailto:contato@automadetech.com" style="color:#16a34a;text-decoration:none;">contato@automadetech.com</a>
                      &nbsp;|&nbsp; 🌐 <a class="link" href="{{brand_url}}" target="_blank" style="color:#16a34a;text-decoration:none;">{{brand_url}}</a>
                    </p>
                    <p class="muted" style="margin:12px 0 0 0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:11px;line-height:18px;color:#9ca3af;">
                      Você recebeu este e-mail porque se inscreveu para saber mais sobre a Automadetech.
                      <a class="link" href="{{unsubscribe_url}}" target="_blank" style="color:#16a34a;text-decoration:underline;">Descadastrar</a>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:24px;"></td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
